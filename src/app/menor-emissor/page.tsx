import axios from "axios";
import { useEffect, useState } from "react";

export default function MenorEmissor() {
    const [consumidor, setConsumidor] = useState<null | {
        nomeConsumidor: string;
        nivelConsumo: number;
        prioridade: number;
        regiao: string;
        status: string;
        emissaoCarbono: number;
        energia: string;
    }>(null);

    const [login, setLogin] = useState("");
    const regiao = "Sudeste"; //PARA ALTERAR A REGIÃO MUDE AQUI OBS:CADASTRE CONSUMIDORES PARA VER, SE N QUISER PODE USAR ESTE LOGIN: enel.sp SENHA: 123

    useEffect(() => {
        const storedLogin = sessionStorage.getItem("clienteLogin");
        if (storedLogin) {
            setLogin(storedLogin);
        } else {
            alert("Login não encontrado.");
        }
    }, []);

    useEffect(() => {
        if (login) {
            const fetchMenorEmissor = async () => {
                try {
                    const response = await axios.get(
                        `http://localhost:8080/fonte/menor-emissor/${regiao}/${login}`
                    );

                    console.log("Resposta do backend:", response.data);

                    if (response.data) {
                        setConsumidor(response.data);
                    } else {
                        console.error("Nenhum dado foi retornado pelo backend.");
                    }
                } catch (error) {
                    console.error("Erro ao buscar o menor emissor:", error);
                    alert("Ocorreu um erro ao buscar o menor emissor.");
                }
            };

            fetchMenorEmissor();
        }
    }, [login]);

    return (
        <section className="container">
            <h3 className="text-corP1 text-2xl">Menor Emissor da Região {regiao}:</h3>
            {consumidor ? (
                <div>
                    <p className="text-corP1"><strong>Nome:</strong> {consumidor.nomeConsumidor}</p>
                    <p className="text-corP1"><strong>Nível de Consumo:</strong> {consumidor.nivelConsumo} kWh</p>
                    <p className="text-corP1"><strong>Prioridade:</strong> {consumidor.prioridade}</p>
                    <p className="text-corP1"><strong>Região:</strong> {consumidor.regiao}</p>
                    <p className="text-corP1"><strong>Status:</strong> {consumidor.status}</p>
                    <p className="text-corP1"><strong>Emissão de Carbono:</strong> {consumidor.emissaoCarbono} kg</p>
                    <p> className="text-corP1"<strong>Fonte de Energia:</strong> {consumidor.energia}</p>
                </div>
            ) : (
                <p>Carregando dados...</p>
            )}
        </section>
    );
}