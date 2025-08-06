import minion from "../assets/minion.jpg"

const Owner = () => {
  return (
    <div className='text-center w-full'>
        <h1 className='text-3xl my-4 font-bold'>24 Rosarin Rojritthakorn (ไนซ์) - JSD X</h1>
        <img src={minion} alt="Rosarin" className="w-50 h-50 mx-auto my-6"/>
        <p className="font-semibold my-4">Short Biography:</p>
        <p className='mx-auto w-[60%]'>I'm learner at JSD bootcamp from Generation. I like to eat sushi. I met lots of amazing people from this bootcamp. They aim to switch their career into tech industry like me where I aim becoming a fullstack developer. This is my react assessment. I tried to do my best for this assessment I have a backache. Sorry for my broken English. Hope you have a nice day/night.</p>
    </div>
  )
}

export default Owner