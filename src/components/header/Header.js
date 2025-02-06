export default function Header () {
  return (
    <header
      className='flex justify-between w-3/4 bg-yellow-100 px-4 py-6 m-8 rounded-lg border-8 border-yellow-500 shadow-[0_2.5px_7.5px_rgba(0,0,0,1)]'
    >
      <div
        className='relative h-full w-full'
      >
        <img
          className='absolute -top-10 drop-shadow-[0_7.5px_2.5px_rgba(100,44,0,1)]'
          src='https://raw.githubusercontent.com/IoTUS-ETSII-US/web/refs/heads/main/img/logo2.png'
          alt='Logo'
        />
      </div>
      <div
        className='w-full text-right'
      >
        <span
          className='w-full text-xl font-bold text-gray-800 drop-shadow-[0_1px_5px_rgba(255,255,255,1)]'
        >
          Asociación de proyectos de IoT de la Escuela Técnica Superior de Ingenieria Informática de la Universidad de Sevilla
        </span>
      </div>
    </header>
  )
}
