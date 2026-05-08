export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/610a4c13-7aff-4603-91eb-6758c3736db1/files/bb8cfb54-5797-480c-920d-e457e1499b3b.jpg"
          alt="Елена Виноградова — детский психолог"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="about" className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Обо мне</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Елена Виноградова — нейропсихолог и психоаналитик с опытом работы с детьми. Специализируюсь на нарушениях речи, задержке развития и поведенческих трудностях.
        </p>
        <div className="mb-8 space-y-2 text-neutral-600 text-sm">
          <p>· Диплом культуролога, УрГУ им. Горького, Екатеринбург (2005)</p>
          <p>· Психоаналитическая работа с детьми, ВЕИП, Санкт-Петербург (2018)</p>
          <p>· Нейропсихология детского возраста, АНО «НИИДПО», Москва (2018)</p>
          <p>· Нейропсихологическая помощь детям с нарушением речи, АНО ДПО «ЦНПР» (2018)</p>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Записаться на приём
        </button>
      </div>
    </div>
  );
}