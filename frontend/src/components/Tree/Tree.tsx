import {Nodo} from "../Nodo";

interface Module {
    moduleNumber: number;
    moduleTitle: string;
    moduleDescription: string;
    moduleInformation: string;
}

interface TreeProps {
    data: {
        pathType: string;
        path: Module[];
    };
}

const Tree = ({ data }: TreeProps) => {
    return (
        <div className="w-full max-w-2xl">
            <h2 className="text-2xl mb-4">Tipo de Camino: {data.pathType}</h2>
            <div className="flex flex-col space-y-4">
                {data.path.map((module) => (
                    <div key={module.moduleNumber}>
                        <Nodo module={module} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tree;