'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategoryList from "./_components/CategoryList";
import GlobalApi from "./_services/GlobalApi";
import { useEffect, useState } from "react";
import BusinessList from "./_components/BusinessList";


export default function Home() {
  
  const [categoryList, setCategoryList]=useState([]);
  const [businessList, setBusinessList]=useState([]);

  useEffect(()=>{
    getCategoryList();
    getAllBussinesList();
  },[])

  /* Obtener lista de Categoria */
  const getCategoryList=()=>{
    GlobalApi.getCategory().then(resp=>{
      setCategoryList(resp.categories);
    })
  }
  
  /* Obtener lista de Empresas */
  const getAllBussinesList=()=>{
    GlobalApi.getAllBussinesList().then(resp=>{
      setBusinessList(resp.businessLists)
    })
  }
  
  return (
    <div>
      <Hero/>
      <CategoryList categoryList={categoryList}/>

      <BusinessList businessList={businessList} title={'Categorias Populares'} />
    </div>
  );
}
