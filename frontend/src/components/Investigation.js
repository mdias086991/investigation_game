import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ArrowLeft, FileText, MessageCircle, Users, CheckCircle } from "lucide-react";
import { mockCases } from "../data/mockData";

const Investigation = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const caseData = mockCases.find(c => c.id === caseId);
  const [selectedEvidence, setSelectedEvidence] = useState(null);
  const [answers, setAnswers] = useState({});
  const [currentTab, setCurrentTab] = useState("evidence");

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

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    caseData.questions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    return Math.round((correctAnswers / caseData.questions.length) * 100);
  };

  const canFinishInvestigation = () => {
    return caseData.questions.every(question => answers[question.id] !== undefined);
  };

  const finishInvestigation = () => {
    const score = calculateScore();
    navigate(`/results/${caseId}`, { 
      state: { 
        score, 
        answers,
        totalQuestions: caseData.questions.length 
      } 
    });
  };

  const getEvidenceIcon = (type) => {
    switch (type) {
      case "conversation": return <MessageCircle className="h-5 w-5" />;
      case "document": return <FileText className="h-5 w-5" />;
      default: return <FileText className="h-5 w-5" />;
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate(`/case/${caseId}`)}
            className="text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao briefing
          </Button>
        </div>
        <div className="text-right">
          <h1 className="text-2xl font-bold text-white">{caseData.title}</h1>
          <p className="text-slate-400">Investigação em andamento</p>
        </div>
      </div>

      <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800">
          <TabsTrigger value="evidence" className="data-[state=active]:bg-amber-600">
            Evidências
          </TabsTrigger>
          <TabsTrigger value="suspects" className="data-[state=active]:bg-amber-600">
            Suspeitos
          </TabsTrigger>
          <TabsTrigger value="conclusion" className="data-[state=active]:bg-amber-600">
            Conclusões
          </TabsTrigger>
        </TabsList>

        <TabsContent value="evidence" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-amber-400">Evidências Coletadas</h3>
              {caseData.evidence.map((evidence) => (
                <Card 
                  key={evidence.id} 
                  className={`bg-slate-800 border-slate-700 cursor-pointer transition-all duration-200 hover:border-amber-400 ${
                    selectedEvidence?.id === evidence.id ? 'border-amber-400 shadow-lg shadow-amber-400/20' : ''
                  }`}
                  onClick={() => setSelectedEvidence(evidence)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      {getEvidenceIcon(evidence.type)}
                      <CardTitle className="text-white text-lg">{evidence.title}</CardTitle>
                    </div>
                    <CardDescription className="text-slate-400">
                      {evidence.content}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="space-y-4">
              {selectedEvidence ? (
                <Card className="bg-slate-800 border-slate-700">
                  <CardHeader>
                    <CardTitle className="text-amber-400 flex items-center space-x-2">
                      {getEvidenceIcon(selectedEvidence.type)}
                      <span>{selectedEvidence.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <img 
                      src={selectedEvidence.imageUrl} 
                      alt={selectedEvidence.title}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                      <h4 className="font-semibold text-amber-400 mb-2">Detalhes:</h4>
                      <p className="text-slate-300 whitespace-pre-line">{selectedEvidence.details}</p>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="bg-slate-800 border-slate-700">
                  <CardContent className="p-8 text-center">
                    <FileText className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                    <p className="text-slate-400">Selecione uma evidência para ver os detalhes</p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="suspects" className="space-y-6">
          <h3 className="text-xl font-semibold text-amber-400">Suspeitos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {caseData.suspects.map((suspect, index) => (
              <Card key={index} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-amber-400" />
                    <CardTitle className="text-white">{suspect.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="w-fit border-slate-600 text-slate-400">
                    {suspect.role}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-amber-400 text-sm">Motivo:</h4>
                    <p className="text-slate-300 text-sm">{suspect.motive}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-400 text-sm">Álibi:</h4>
                    <p className="text-slate-300 text-sm">{suspect.alibi}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="conclusion" className="space-y-6">
          <h3 className="text-xl font-semibold text-amber-400">Suas Conclusões</h3>
          <div className="space-y-6">
            {caseData.questions.map((question, index) => (
              <Card key={question.id} className="bg-slate-800 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-white text-lg">
                    {index + 1}. {question.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {question.options.map((option, optionIndex) => (
                    <Button
                      key={optionIndex}
                      variant={answers[question.id] === optionIndex ? "default" : "outline"}
                      className={`w-full justify-start text-left ${
                        answers[question.id] === optionIndex 
                          ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                          : 'bg-slate-900 hover:bg-slate-700 border-slate-600 text-slate-300'
                      }`}
                      onClick={() => handleAnswerSelect(question.id, optionIndex)}
                    >
                      {answers[question.id] === optionIndex && <CheckCircle className="h-4 w-4 mr-2" />}
                      {option}
                    </Button>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {canFinishInvestigation() && (
            <div className="flex justify-center pt-6">
              <Button 
                onClick={finishInvestigation}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-green-500/25"
              >
                Finalizar Investigação
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Investigation;