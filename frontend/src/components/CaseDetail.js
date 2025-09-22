import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, Play, Clock, Star } from "lucide-react";
import { mockCases } from "../data/mockData";

const CaseDetail = () => {
  const { caseId } = useParams();
  const navigate = useNavigate();
  const caseData = mockCases.find(c => c.id === caseId);

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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Fácil": return "bg-green-500";
      case "Médio": return "bg-yellow-500";
      case "Difícil": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/")}
          className="text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar aos casos
        </Button>
      </div>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="space-y-4">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Badge className={`${getDifficultyColor(caseData.difficulty)} text-white`}>
                  {caseData.difficulty}
                </Badge>
                <div className="flex items-center space-x-1 text-slate-400">
                  <Star className="h-4 w-4" />
                  <span>{caseData.rating}</span>
                </div>
                <div className="flex items-center space-x-1 text-slate-400">
                  <Clock className="h-4 w-4" />
                  <span>{caseData.estimatedTime}</span>
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-white">
                {caseData.title}
              </CardTitle>
              <CardDescription className="text-slate-400 text-lg">
                {caseData.description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="bg-slate-900 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-amber-400 mb-4">Briefing do Caso</h3>
            <div className="text-slate-300 leading-relaxed whitespace-pre-line">
              {caseData.story}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <h4 className="font-semibold text-amber-400 mb-2">Evidências Disponíveis</h4>
              <p className="text-slate-400">{caseData.evidence.length} peças de evidência para análise</p>
            </div>
            <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">
              <h4 className="font-semibold text-amber-400 mb-2">Suspeitos</h4>
              <p className="text-slate-400">{caseData.suspects.length} pessoas sob investigação</p>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => navigate(`/investigation/${caseId}`)}
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-amber-500/25"
            >
              <Play className="h-5 w-5 mr-2" />
              Começar Investigação
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseDetail;