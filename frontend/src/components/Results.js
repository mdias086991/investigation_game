import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Trophy, Star, RotateCcw, Home, CheckCircle, XCircle } from "lucide-react";
import { mockCases } from "../data/mockData";

const Results = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const caseData = mockCases.find(c => c.id === caseId);
  
  const { score, answers, totalQuestions } = location.state || { 
    score: 0, 
    answers: {}, 
    totalQuestions: 0 
  };

  if (!caseData) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-bold text-red-400">Caso não encontrado</h2>
        <Button onClick={() => navigate("/")} className="bg-slate-700 hover:bg-slate-600">
          Voltar aos casos
        </Button>
      </div>
    );
  }

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  const getScoreBadge = (score) => {
    if (score >= 90) return { text: "Detetive Excelente", color: "bg-green-500" };
    if (score >= 80) return { text: "Detetive Experiente", color: "bg-blue-500" };
    if (score >= 60) return { text: "Detetive Iniciante", color: "bg-yellow-500" };
    return { text: "Mais Sorte na Próxima", color: "bg-red-500" };
  };

  const getScoreMessage = (score) => {
    if (score >= 90) return "Parabéns! Você demonstrou habilidades excepcionais de investigação. Suas deduções foram precisas e sua análise das evidências foi exemplar.";
    if (score >= 80) return "Muito bem! Você mostrou boas habilidades investigativas. Com um pouco mais de atenção aos detalhes, você pode se tornar um detetive excepcional.";
    if (score >= 60) return "Bom trabalho! Você está no caminho certo. Continue praticando e analisando as evidências com mais cuidado para melhorar suas habilidades.";
    return "Não desanime! A investigação criminal é uma arte que requer prática. Revise as evidências e tente novamente para melhorar suas habilidades dedutivas.";
  };

  const correctAnswers = caseData.questions.filter(question => 
    answers[question.id] === question.correctAnswer
  ).length;

  const scoreBadge = getScoreBadge(score);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <Trophy className={`h-20 w-20 mx-auto ${getScoreColor(score)}`} />
        <h1 className="text-4xl font-bold text-white">Investigação Concluída</h1>
        <p className="text-slate-400 text-lg">{caseData.title}</p>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <Badge className={`${scoreBadge.color} text-white text-lg py-2 px-4`}>
              {scoreBadge.text}
            </Badge>
          </div>
          <CardTitle className={`text-6xl font-bold ${getScoreColor(score)}`}>
            {score}%
          </CardTitle>
          <CardDescription className="text-xl text-slate-300">
            {correctAnswers} de {totalQuestions} respostas corretas
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">Análise da Performance</h3>
            <p className="text-slate-300 leading-relaxed">
              {getScoreMessage(score)}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-400">Revisão das Respostas</h3>
            {caseData.questions.map((question, index) => {
              const userAnswer = answers[question.id];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <Card key={question.id} className="bg-slate-900 border-slate-700">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      {isCorrect ? (
                        <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg">
                          {index + 1}. {question.question}
                        </CardTitle>
                        <div className="mt-3 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-slate-400 text-sm">Sua resposta:</span>
                            <Badge 
                              variant={isCorrect ? "default" : "destructive"}
                              className={isCorrect ? "bg-green-600" : "bg-red-600"}
                            >
                              {question.options[userAnswer]}
                            </Badge>
                          </div>
                          {!isCorrect && (
                            <div className="flex items-center space-x-2">
                              <span className="text-slate-400 text-sm">Resposta correta:</span>
                              <Badge className="bg-green-600">
                                {question.options[question.correctAnswer]}
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="flex justify-center space-x-4 pt-6">
            <Button 
              onClick={() => navigate(`/investigation/${caseId}`)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Investigar Novamente
            </Button>
            <Button 
              onClick={() => navigate("/")}
              className="bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 px-6"
            >
              <Home className="h-4 w-4 mr-2" />
              Outros Casos
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Results;