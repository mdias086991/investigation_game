import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Clock, Star, Users } from "lucide-react";
import { mockCases } from "../data/mockData";

const CaseSelection = () => {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Fácil": return "bg-green-500";
      case "Médio": return "bg-yellow-500";
      case "Difícil": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          Casos de Investigação
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Escolha um caso para investigar. Use suas habilidades de detetive para encontrar pistas, 
          analisar evidências e resolver crimes complexos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCases.map((caseItem) => (
          <Card key={caseItem.id} className="bg-slate-800 border-slate-700 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/20">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <Badge className={`${getDifficultyColor(caseItem.difficulty)} text-white`}>
                  {caseItem.difficulty}
                </Badge>
                <div className="flex items-center space-x-1 text-slate-400">
                  <Star className="h-4 w-4" />
                  <span className="text-sm">{caseItem.rating}</span>
                </div>
              </div>
              <CardTitle className="text-white text-xl">{caseItem.title}</CardTitle>
              <CardDescription className="text-slate-400 line-clamp-3">
                {caseItem.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm text-slate-400">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{caseItem.estimatedTime}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{caseItem.solved} resolvidos</span>
                </div>
              </div>
              
              <Button 
                onClick={() => navigate(`/case/${caseItem.id}`)}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 transition-colors duration-200"
              >
                Iniciar Investigação
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CaseSelection;