import Link from "next/link";


export default function Home() {
  return (
    <div className={`flex justify-center items-center h-screen`}>
      <Link
        href={`https://triban.co/bIcYC`}
        className={`
          flex justify-center items-center bg-[#73B636] text-white px-[10px] py-[5px] rounded-sm shadow-sm shadow-lime-500 
          hover:bg-[#CF0921] hover:shadow-sm hover:shadow-red-500  hover:transition hover:ease-in-out hover:duration-500
          hover:scale-[1.05]
        `}
      >
        Peça o seu cartão
      </Link>
    </div>
  );
}
