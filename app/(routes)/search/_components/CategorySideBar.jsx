'use client'
import GlobalApi from "@/app/_services/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

function CategorySideBar() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory]=useState();
  const params=usePathname();
  params.split('/')[2];

  useEffect(() => {
    getCategoryList();
  }, []);

  useEffect(()=>{
    params&&setSelectedCategory(params.split('/')[2])
  },[params])

  /* Obtener lista de Categoria */
  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      setCategoryList(resp.categories);
    });
  };

  return(
    <div>
        <h2 className="font-bold mb-3 text-lg text-primary">Categorias</h2>
        <div>
            {categoryList.map((category, index)=>(
                <Link href={'/search/'+ category.name} key={index} className={`flex gap-2 p-3 mt-8 border rounded-lg mb-3 cursor-pointer md:mr-10 hover:bg-slate-700 hover:shadow-md hover:text-primary hover:border-primary items-center  ${selectedCategory==category.name&&'border-primary text-primary shadow-md bg-slate-700'}`}> 
                <Image src={category.icon.url}
                alt='icon'
                width={30}
                height={30}
                 />
    <h2>{category.name}</h2>
                </Link>
            ))}
        </div>
  </div>
  );
}

export default CategorySideBar;
