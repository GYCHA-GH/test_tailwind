import './App.css'
import Pahlava from './assets/ph.png'
import User from './assets/user.png'
import Img from './assets/пахлава.jpeg'
function App() {
  return (
    <>
      <header className='p-5 flex justify-between bg-purple-400'> 
        <img  className='w-18' src={Pahlava} alt="" /> 
          <nav className='items-center w-140 flex justify-between'>
          <a className='text-amber-50' href="">معلومات عن</a>
          <a className='text-amber-50' href="">اتصالات</a>
          <a className='text-amber-50' href="">حساب تعريفي</a>
          <a className='text-amber-50' href="">الرعاة</a>
          <div className=" w-32 flex justify-between">
            <button className=' rounded-md text-amber-50 bg-lime-400 w-15 h-8 cursor-not-allowed '>Log</button>
            <button className=' rounded-md text-amber-50 bg-lime-400 w-15 h-8 cursor-not-allowed '>Reg</button>
          </div>
        </nav>
      </header>
      <article className='p-20' >
        <section className='p-6  rounded-xl bg-purple-400'>
          <div className='flex justify-between items-center'>
            <img className='mr-20 rounded-xl w-25' src={User} alt="" />
            <p className='text-4xl text-lime-400'>Пахлава Baklava بَقْلَاوَة</p>
          </div>
          <p className='mt-6 text-lime-400'>البقلاوة حلوى متعددة الطبقات. تُصنع من رقائق عجين رقيقة كالورق، تُدهن بالزبدة وتُرص في صينية خبز مستطيلة، تتخللها طبقات من الحشوة، وهي مزيج من العسل والمكسرات (عادةً الجوز أو الفستق).</p>
          <nav className='m-auto mt-10 items-center  flex justify-between'>
          <a className='rounded-md bg-lime-400 text-center w-25 text-amber-50' href="">معلومات عنا</a>
          <a className='rounded-md bg-lime-400 text-center w-25 text-amber-50' href="">اتصالات</a>
          <a className='rounded-md bg-lime-400 text-center w-25 text-amber-50' href="">حساب تعريفي</a>
          <a className='rounded-md bg-lime-400 text-center w-25 text-amber-50' href="">الرعاة</a>
        </nav>
        </section>
        <section className='flex justify-between p-6 mt-30 rounded-xl bg-purple-400'>
          <img className='mr-10 rounded-xl w-100' src={Img} alt="" />
          <p className='mr-20 italic text-xs'>О, как прекрасна пахлава,<br />
Когда в морозный зимний день<br />
В душе рождаются слова:<br />
Восток, жара, чинары тень…<br />
<br />
И небосвод – ультрамарин,<br />
Арыков чистая вода,<br />
И никаких не надо вин,<br />
Остаться здесь бы навсегда.<br />
<br />
Где в чайхане зелёный чай,<br />
Блестят у девушек глаза,<br />
Как обещание, есть рай,<br />
Раз на столе есть пахлава!<br />
<br />
О, мой Восток, прекрасен ты,<br />
И пусть прошли уже года,<br />
Но памятны твои цветы,<br />
И вкус, и радость навсегда.<br />

Звучат возвышенно слова:<br />
Восток,<br />
           Надежды…
                Иншалла!</p>
        </section>
      </article>

    </>
  ) 
}
export default App
