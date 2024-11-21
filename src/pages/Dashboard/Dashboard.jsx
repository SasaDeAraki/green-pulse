import './Dashboard.css'
import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import DashCard from '../../components/DashCard/DashCard';

const CustomTooltip = ({ payload, label, active }) => {
  if (active && payload && payload.length) {
    const { uv, pv } = payload[0].payload;
    return (
      <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <p><strong>{label}</strong></p>
        <p>Energia: {pv} MWh</p> 
        <p>Passos: {uv} M</p>
      </div>
    );
  }
  return null;
};

export default function Dashboard() {
  // Estado para armazenar a estação selecionada
  const [estacaoSelecionada, setEstacaoSelecionada] = useState('Estação da Sé');

  const estacoes = [
    {
      nome: 'Estação da Sé',
      dadosGrafico: [
        { name: 'Janeiro', uv: 34, pv: 240 },
        { name: 'Fevereiro', uv: 43, pv: 303 },
        { name: 'Março', uv: 44, pv: 311 },
        { name: 'Abril', uv: 43, pv: 301 },
        { name: 'Maio', uv: 41, pv: 287 },
        { name: 'Junho', uv: 42, pv: 300 },
        { name: 'Julho', uv: 48, pv: 339 },
        { name: 'Agosto', uv: 44, pv: 308 },
        { name: 'Setembro', uv: 43, pv: 304 },
        { name: 'Outubro', uv: 44, pv: 313 },
        { name: 'Novembro', uv: 37, pv: 259 },
        { name: 'Dezembro', uv: 48, pv: 342 }
      ],
      dadosAdicionais: {
        totalPassos: 48,
        energiaTotalGerada: 342, // em MWh
        carbonoNegado: 205.2, // em toneladas
        mediaPessoas: '350k',
        energiaPorPasso: '7w'
      }
    },
    {
      nome: 'Estação do Butantã',
      dadosGrafico: [
        { name: 'Janeiro', uv: 4, pv: 28 },
        { name: 'Fevereiro', uv: 4, pv: 31 },
        { name: 'Março', uv: 3, pv: 24 },
        { name: 'Abril', uv: 5, pv: 35 },
        { name: 'Maio', uv: 4, pv: 26 },
        { name: 'Junho', uv: 4, pv: 31 },
        { name: 'Julho', uv: 4, pv: 33 },
        { name: 'Agosto', uv: 4, pv: 30 },
        { name: 'Setembro', uv: 4, pv: 26 },
        { name: 'Outubro', uv: 4, pv: 29 },
        { name: 'Novembro', uv: 4, pv: 28 },
        { name: 'Dezembro', uv: 5, pv: 34 }
      ],
      dadosAdicionais: {
        totalPassos: 5,
        energiaTotalGerada: 34, // em MWh
        carbonoNegado: 144, // em toneladas
        mediaPessoas: '35k',
        energiaPorPasso: '7w'
      }
    },
    {
      nome: 'Estação da Luz',
      dadosGrafico: [
        { name: 'Janeiro', uv: 30, pv: 210 },
        { name: 'Fevereiro', uv: 33, pv: 235 },
        { name: 'Março', uv: 27, pv: 193 },
        { name: 'Abril', uv: 36, pv: 252 },
        { name: 'Maio', uv: 31, pv: 218 },
        { name: 'Junho', uv: 32, pv: 226 },
        { name: 'Julho', uv: 34, pv: 243 },
        { name: 'Agosto', uv: 29, pv: 184 },
        { name: 'Setembro', uv: 26, pv: 184 },
        { name: 'Outubro', uv: 32, pv: 223 },
        { name: 'Novembro', uv: 30, pv: 210 },
        { name: 'Dezembro', uv: 37, pv: 260 }
      ],
      dadosAdicionais: {
        totalPassos: 37,
        energiaTotalGerada: 260, // em MWh
        carbonoNegado: 156, // em toneladas
        mediaPessoas: '266k',
        energiaPorPasso: '7w'
      }
    }
  ];

  // Função para mudar a estação selecionada
  const selecionarEstacao = (nome) => {
    setEstacaoSelecionada(nome);
  };

  // Filtrar a estação selecionada para exibir seus dados
  const estacaoAtual = estacoes.find(estacao => estacao.nome === estacaoSelecionada);

  return (
    <>
      <div className='container-dashboard'>
        <div className='dashboard-graph'>
          <div className='dashboard-locais'>
            <div className='locais-titulo'>
              <h3>Locais</h3>
            </div>
            <div className='locais'>
              {estacoes.map(estacao => (
                <p
                  key={estacao.nome}
                  onClick={() => selecionarEstacao(estacao.nome)}
                  style={{
                    cursor: 'pointer',
                    color: estacao.nome === estacaoSelecionada ? '#789756' : 'black', // Altera a cor da estação selecionada
                  }}
                >
                  {estacao.nome}
                </p>
              ))}
            </div>
          </div>

          <div className='line-graph'>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={estacaoAtual.dadosGrafico}
                margin={{
                  top: 50,
                  right: 60,
                  left: 20,
                  bottom: 10,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Line name='Energia' type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line name='Passos' type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>

          </div>
        </div>
            <div className="dashboard-info">
              <DashCard titulo={'Total de passos'} sub={'do último mês'} content={`${estacaoAtual.dadosAdicionais.totalPassos} M`} />
              <DashCard titulo={'Energia total'} sub={'gerada no último mês'} content={`${estacaoAtual.dadosAdicionais.energiaTotalGerada} MWh`} />
              <DashCard titulo={'Carbono negado'} sub={'no último mês'} content={`${estacaoAtual.dadosAdicionais.carbonoNegado}T`} />
              <DashCard titulo={'Média de pessoas'} sub={'por ponto diariamente'} content={estacaoAtual.dadosAdicionais.mediaPessoas} />
              <DashCard titulo={'Energia gerada'} sub={'por passo'} content={estacaoAtual.dadosAdicionais.energiaPorPasso} />
            </div> 
      </div>
    </>
  );
}
