import Image from "next/image";

type ProfileProps = {
    name: string
    image: string
}
export const Profile: React.FC<ProfileProps> = ({ name, image }) => {
    return (
        <div className="flex gap-2 items-center justify-end mt-10 px-4 pb-6">
            <Image
                className="w-8 h-8 rounded-full"
                src={image}
                alt='Profile' width={48} height={48} />
            <span className="text-[#888888] font-semibold text-[15px] lowercase">@{name}</span>
        </div>
    );
};
