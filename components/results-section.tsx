
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users, 
  Zap,
  Target,
  Award,
  BarChart3
} from 'lucide-react';

const Counter = ({ end, duration = 2000, prefix = '', suffix = '' }: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const startCount = 0;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };
    
    requestAnimationFrame(updateCount);
  }, [inView, end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString('pt-BR')}{suffix}</span>;
};

const results = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    number: 18000,
    prefix: 'R$ ',
    suffix: '+',
    label: 'Economia Média Mensal',
    description: 'Redução de custos operacionais através de automações e otimizações'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    number: 65,
    suffix: '%',
    label: 'Aumento Produtividade',
    description: 'Melhoria na eficiência dos processos empresariais'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    number: 40,
    suffix: 'h',
    label: 'Tempo Economizado/Semana',
    description: 'Horas liberadas para atividades estratégicas'
  },
  {
    icon: <Users className="w-6 h-6" />,
    number: 150,
    suffix: '+',
    label: 'Empresas Transformadas',
    description: 'Clientes satisfeitos em diversos segmentos'
  }
];

const cases = [
  {
    icon: <Zap className="w-6 h-6" />,
    company: "Grupo Alimentício Regional",
    challenge: "Gestão manual de estoque e vendas",
    solution: "Automação completa + BI",
    result: "70% redução de erros e R$ 25.000 economia/mês",
    category: "Automação"
  },
  {
    icon: <Target className="w-6 h-6" />,
    company: "Escritório de Advocacia",
    challenge: "Processos burocráticos demorados",
    solution: "IA para análise de documentos",
    result: "60% redução no tempo de análise processual",
    category: "Inteligência Artificial"
  },
  {
    icon: <Award className="w-6 h-6" />,
    company: "Rede de Varejo",
    challenge: "Infraestrutura cara e instável",
    solution: "Migração completa para cloud",
    result: "50% redução custos TI + 99.9% uptime",
    category: "Cloud Computing"
  }
];

export function ResultsSection() {
  return (
    <section id="results" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Resultados que <span className="text-blue-600">Comprovam</span> Nossa Eficiência
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 150 empresas já transformaram seus negócios conosco. 
            Veja os números que falam por si só.
          </p>
        </motion.div>

        {/* Results Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-blue-600 mb-3 flex justify-center">
                {result.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                <Counter 
                  end={result.number} 
                  prefix={result.prefix} 
                  suffix={result.suffix}
                />
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-2">
                {result.label}
              </div>
              <div className="text-sm text-gray-600">
                {result.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Cases de <span className="text-blue-600">Sucesso</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">
                    {case_.icon}
                  </div>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {case_.category}
                  </span>
                </div>
                
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {case_.company}
                </h4>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-gray-700">Desafio:</span>
                    <p className="text-gray-600 mt-1">{case_.challenge}</p>
                  </div>
                  
                  <div>
                    <span className="font-semibold text-gray-700">Solução:</span>
                    <p className="text-gray-600 mt-1">{case_.solution}</p>
                  </div>
                  
                  <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    <span className="font-semibold text-green-800">Resultado:</span>
                    <p className="text-green-700 mt-1">{case_.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
