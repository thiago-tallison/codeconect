import { Search } from "lucide-react";

export const Pesquisar: React.FC = () => {
    return (
        <div className='flex gap-2 w-full mb-14'>
            <div className="bg-[#171D1F] text-white flex gap-4 items-center px-4 rounded-md flex-1 focus-within:ring">
                <Search size={18} />
                <input
                    className="bg-transparent py-2 flex-1 outline-none border-none"
                    type='text' placeholder='Digite o que você procura' />
            </div>

            <button className="bg-[#81FE88] text-black font-semibold py-3 px-4 rounded-lg">Buscar</button>
        </div>
    );
};
