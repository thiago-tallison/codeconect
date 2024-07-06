import Image from "next/image";
type AvatarProps = {
    imageLink: string;
    name: string;
};

export const Avatar: React.FC<AvatarProps> = ({ imageLink, name }) => {
    return (
        <div className='flex items-center gap-2'>
            <Image
                width={64}
                height={64}
                src={imageLink}
                alt={`Foto do perfil de ${name}`}
                className='w-8 h-8 object-cover rounded-full'
            />
            <span className='text-[#171D1F] text-[15px] font-semibold lowercase'>
                @{name}
            </span>
        </div>
    );
};
