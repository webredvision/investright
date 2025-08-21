
"use client";
 
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InnerBanner from "@/components/InnerBanner/InnerBanner";
import axios from "axios";

 
export default function PayPremium() {
  const [allCategory, setAllCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(""); // category _id
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState(""); // display title
  const [amcLogoData, setAmcLogoData] = useState([]);
 
  useEffect(() => {
    fetchCategories();
  }, []);
 
  useEffect(() => {
    if (selectedCategoryId) {
      fetchLogos(selectedCategoryId);
    }
  }, [selectedCategoryId]);
const fetchCategories = async () => {
  try {
    const res = await axios.get("/api/amc-category");
    const data = res.data;

    const filtered = data.filter((cat) =>
      ["Life Insurance", "Health Insurance", "General Insurance"].includes(cat.title)
    );

    setAllCategory(filtered);

    if (filtered.length > 0) {
      setSelectedCategoryId(filtered[0]._id);
      setSelectedCategoryTitle(filtered[0].title);
    }
  } catch (error) {
    console.error("Error fetching categories:", error.message || error);
  }
};

const fetchLogos = async (categoryID) => {
  try {
    const res = await axios.get(`/api/amc-logos`, {
      params: {
        categoryID: categoryID,
        addisstatus: true, // Boolean or string depending on backend handling
      },
    });

    if (res.data.success) {
      setAmcLogoData(res.data.data);
    }
  } catch (err) {
    console.error("Failed to fetch AMC Logos:", err.message || err);
  }
};
 
 
  return (
    <div className="">
        <InnerBanner pageName={"Pay Premium Online"} />
      <section className="container mx-auto main_section">
     
 
        <div>
          {/* CATEGORY BUTTONS */}
          <div className="md:px-5 py-4 bg-[var(--rv-secondary)] text-black flex flex-wrap gap-2 md:gap-4 rounded">
            {allCategory.map((cat) => (
              <div
                key={cat._id}
                className={`cursor-pointer uppercase px-4 py-2 rounded font-semibold hover:text-[--rv-primary] ${
                  selectedCategoryId === cat._id
                    ? "text-[var(--rv-white)] bg-[var(--rv-primary)]"
                    : "text-[var(--rv-white)] bg-[var(--rv-gredient)]"
                }`}
                onClick={() => {
                  setSelectedCategoryId(cat._id);
                  setSelectedCategoryTitle(cat.title);
                }}
              >
                {cat.title}
              </div>
            ))}
          </div>
 
          {/* AMC LOGOS */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 my-4">
            {amcLogoData.map((item, index) => (
              <Link href={item.logourl || "#"} key={index} target="_blank">
                <div className="flex justify-center p-5 border text-center mb-3">
                  <img
                    src={`https://redvisionweb.com/${item.logo}`}
                    alt={`logo-${item.logoname}`}
                    width={150}
                    height={100}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
 
 

 
 