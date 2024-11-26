import React, { useEffect, useState } from 'react'
import {useFetch} from "../../hooks/useFetch"
import { motion } from "framer-motion"
import male from "../../assets/male.png"
import female from "../../assets/female.svg"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const {data}= useFetch('https://dummyjson.com/users')
  console.log(data);
  return (
    <>
    <section className="py-16 max-[900px]:py-12 max-[500px]:py-10 bg-slate-100">
  <div className="container__person">
    <div className="ml-[300px] flex flex-col gap-4">
      {data?.users?.map((item) => (
        <div
          className="bg-white rounded-lg shadow-md p-4 w-[700px] h-[100px] flex items-center"
          key={item.id}
        >
          <div className="mr-4">
            <img
              src={item.gender === "male" ? male : female}
              alt="User avatar"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 truncate">
              {item.firstName} {item.lastName} {item.maidenName}
            </h2>
            <p className="text-sm text-gray-600">{item.company.department}</p>
            <p className="text-xs text-gray-700">Email: {item.email}</p>
            <p className="text-xs text-gray-700">Phone: {item.phone}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  )
}

export default Home