import Image from 'next/image';
import data from '@/data.json';
import { GitHubIcon, TwitterIcon } from '@/app/Icons';

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className='flex items-center w-full max-w-3xl p-1 mb-3 transition-all bg-gray-100 rounded-md hover:scale-105'
    >
      <div className='flex w-full text-center'>
        <div className='w-10 h-10'>
          {image && (
            <Image
              className='rounded-sm'
              alt={title}
              src={image}
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className='flex justify-center w-full font-semibold text-center text-gray-700'>
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full px-8 mx-auto mt-16'>
      <Image
        className='rounded-full'
        src={data.avatar}
        width={96}
        height={67}
        alt={data.name}
      />
      <h1 className='mt-4 mb-8 text-xl font-bold text-white'>{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className='flex items-center gap-4 mt-8 text-white'>
        {data.socials.map((link) => {
          if (link.href.includes('twitter')) {
            return <TwitterIcon />;
          }
          if (link.href.includes('github')) {
            return <GitHubIcon />;
          }
        })}
      </div>
    </div>
  );
}
