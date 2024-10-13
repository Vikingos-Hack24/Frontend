import { useLocation } from "react-router-dom";
import {Tree} from "../../components";
import {LogButton} from "../../components";
import { useNavigate } from "react-router-dom";

const LearningPathPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const data = location.state?.data;

    if (!data) {
        navigate("/evaluate-context");
        return null;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 font-rubik bg-gray-100">
            <h1 className="text-4xl mb-6">Learning Path</h1>
            <Tree data={data} />
            <LogButton
                color="bg-gray-400 text-lg text-white mt-6"
                onClick={() => navigate(-1)}
            >
                BACK
            </LogButton>
        </div>
    );
};

export default LearningPathPage;