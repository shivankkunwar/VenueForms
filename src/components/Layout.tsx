import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface LayoutProps {
  step: number;
  totalSteps: number;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  rightImage: string;
  rightText: string;
  onBack?: () => void;
}

export default function Layout({
  step,
  totalSteps,
  title,
  subtitle,
  children,
  onBack,
}: LayoutProps) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdf8e7] flex justify-between">
      <div className="flex-1 pl-8 pt-8 lg:pt-4 pr-6  w-screen">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={() => (onBack ? onBack() : navigate(-1))}
            className="mb-8 p-2 rounded-lg bg-[#FDB347] hover:bg-[#FDA347] transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>

          <div className="mb-8">
            <div className="h-1 bg-[#FDB347]/20 rounded-full">
              <div
                className="h-full bg-[#FDB347] rounded-full transition-all duration-500"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <div className="space-y-6 text-center">
            <p className="mt-2 text-sm text-gray-600">
              Step {step}/{totalSteps}
            </p>
            <h1 className="text-4xl font-playfair font-bold text-gray-900">
              {title}
            </h1>
            {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
            <div className="mt-8">{children}</div>
          </div>
        </div>
      </div>
      <div className=" flex-1 max-h-[100vh] bg-white">
      <div className="w-full p-8 flex items-center justify-center h-[90%] ">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#fdf8e7] rounded-full  relative flex flex-col items-center justify-between h-[400px] w-[400px] shadow-lg"
        >
        
          <div className="absolute top-40 transform -translate-y-1/2 text-center">
            <span className="text-amber-400 text-4xl">💡</span>
            <p className="text-gray-700 mt-4 text-lg font-small px-6">
              In receptions, expect about 35% of guests in the floating crowd,
              and ensure ample standing and mingling space.
            </p>
          </div>

  
          <div className="absolute top-60 w-[80%]">
            <img
              src="/guestImage.svg"
              alt="Reception Layout"
              className="rounded-2xl  border-gray-200 w-full"
            />
          </div>
        </motion.div>
      </div>
      </div>
      
    </div>
  );
}
