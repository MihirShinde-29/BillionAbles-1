import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { Navbar } from "../components/Navbar";

export const Dyslexia = () => {
  return (
    <div className='bg-green-200 min-h-screen'>
      <Navbar />
      <div className="py-24 px-48 h-[90vh]">
        <h1 className='text-5xl font-semibold mb-24'>Dyslexia</h1>
        <div className="flex flex-row space-x-24 justify-center items-center">
          <Link to='/dyslexia_reader'>
            <Card name='Dyslexia Reader' data='description' />
          </Link>
          <Link to='/sign_detection'>
            <Card name='Sign Detection' data='description' />
          </Link>
        </div>
      </div>
    </div>
  )
}
