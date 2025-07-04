// Creating interview list to display previous attempted interviews on AiMockInterview
"use client"
import { db } from '@/configs/db';
import { MockInterview } from '@/configs/schema';
import { useUser } from '@clerk/nextjs'
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

function InterviewList() {

    const {user}=useUser();
    const [interviewList,setInterviewList]=useState([]);

    useEffect(()=>{
        user&&GetInterviewList();
    },[user])

    const GetInterviewList=async()=>{
        const result=await db.select()
        .from(MockInterview)
        .where(eq(MockInterview.createdBy,user?.primaryEmailAddress?.emailAddress))
        .orderBy(desc(MockInterview.id));
        setInterviewList(result);
    }

  return (
    <div>
        <h2 className='font-medium text-xl'>Previous Mock Interview</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3'>
            {interviewList?.length>0?interviewList.map((interview)=>(
                <InterviewItemCard 
                interview={interview}
                key={interview.mockId|| interview.id} />
            ))
            :
            [1,2,3,4].map((item,index)=>(
                <div key={index} className='h-[100px] w-full bg-gray-200 animate-pulse rounded-lg '>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default InterviewList