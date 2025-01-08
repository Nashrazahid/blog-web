"use client";
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import React from 'react';
import Image from 'next/image';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import Comment from '@/components/Comment';

interface Params {
  slug: string;
}
const page = async ({ params }: { params: Params }) => {
  console.log("Slug:", params.slug);

  // Corrected query with backticks and const
  const singleBlogQuery = `
    *[_type == "blog" && slug.current == "${params.slug}"]{
      title,
      content,
      heading,
      image
    }  `;
  const sanityData = await client.fetch(singleBlogQuery);
  console.log("Sanity Data:", sanityData);

  if (!sanityData?.length) {
    return <div>Blog not found</div>;
  }
  const blog = sanityData[0];

  //  Custom PortableText Components
  const customComponents: PortableTextComponents = {
    types: {
      image: ({ value }) => (
        <div className="my-4">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || 'Blog Image'}
            width={800}
            height={0}
            sizes="100vw"
            className="w-full max-w-[90%] max-h-[400px] h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      ),
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Title and Heading */}
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <h2 className="text-xl font-semibold text-gray-700 mb-6">{blog.heading}</h2>

      {/* Main Blog Image */}
      {blog.image && (
        <div className="mb-6">
          <Image
            src={urlFor(blog.image).url()}
            alt="Blog Image"
            width={800}
            height={0}
            sizes="100vw"
            className="w-full max-w-[90%] max-h-[400px] h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose">
        <PortableText value={blog.content} components={customComponents} />
      </div>

      {/*  Comment Section */}
      <Comment />
    </div>
  );
};

export default page;
