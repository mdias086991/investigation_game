import React from "react";
import { Outlet } from "react-router-dom";
import { Search, Shield, FileText } from "lucide-react";

const GameLayout = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-amber-400" />
          <div>
            <h1 className="text-2xl font-bold text-white">Detective Bureau</h1>
            <p className="text-slate-400 text-sm">Sistema de Investigação Criminal</p>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>
      
      <footer className="bg-slate-800 border-t border-slate-700 px-6 py-4 mt-12">
        <div className="text-center text-slate-400 text-sm">
          <p>© 2024 Detective Bureau - Sistema de Treinamento de Investigação</p>
        </div>
      </footer>
    </div>
  );
};

export default GameLayout;