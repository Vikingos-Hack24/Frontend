interface Module {
    moduleNumber: number;
    moduleTitle: string;
    moduleDescription: string;
    moduleInformation: string;
}

interface NodeProps {
    module: Module;
}

const Nodo = ({ module }: NodeProps) => {
    return (
        <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
            <div className="flex flex-col">
                <h3 className="text-xl font-semibold">{module.moduleTitle}</h3>
                <p className="text-gray-600">{module.moduleDescription}</p>
                <p className="text-gray-500 text-sm mt-1">{module.moduleInformation}</p>
            </div>
        </div>
    );
};

export default Nodo;