import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Hero from "@/components/Hero";

// Define the structure of blog content
interface BlockContent {
  _type: 'block';
  children: { text: string }[];
}

interface ImageContent {
  _type: 'image';
  asset: {
    _ref: string;
  };
}

// Define the structure of a blog post
interface BlogPost {
  title: string;
  content: (BlockContent | ImageContent)[]; 
  heading: string;
  image: {
    asset: {
      _ref: string;
    };
  };
  slug: {
    current: string;
  };
}

export default async function Home() {
  // Fetch blogs
  const fetchBlogs = `
  *[_type == "blog"]{
    title,
    content,
    heading,
    image,
    slug
  }
  `;
  const posts: BlogPost[] = await client.fetch(fetchBlogs); // Define the type of the fetched posts

  return (
    <>
      <Hero />
      {/* Blog Section */}
      <h1 className="text-center text-3xl font-bold mt-16 mb-8">Recent Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug.current}
            className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={urlFor(post.image).url()}
              alt={post.title}
              width={400}
              height={250}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold mb-2">{post.heading}</h2>
              <div className="text-gray-700 line-clamp-3 mb-4">
                {/* Render PortableText content */}
                <PortableText value={post.content} />
              </div>
              <Link
                href={`blog/${post.slug?.current}`}
                className="text-blue-600 font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
