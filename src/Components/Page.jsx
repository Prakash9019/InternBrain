import React, { useState, useEffect } from 'react';

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    fetchPosts(); // Call fetchPosts directly (not async)
  }, [skip]);

  const fetchPosts = () => {
    fetch(`http://localhost:3000/api/notes/fetchall?skip=${skip}`, { method: 'GET' })
      .then((response) => response.json()) // Handle the resolved data
      .then((data1) => {
        const data = data1.data;

        if (data?.length === 0) {
          setIsEnd(true);
          return;
        }

        // success
        setPosts([...posts, ...data]);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;

    if (offsetHeight + scrollTop >= scrollHeight) {
      setSkip(posts?.length);
      console.log(skip);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        console.log(posts);
        setSkip(posts?.length);
        console.log(skip);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div >
      <div className="min-h-screen mt-8" onScroll={handleScroll}>
        <div className="text-center mb-14">
          <h1 className="text-4xl">MERN Miscellaneous</h1>
          <h1 className="text-3xl text-accent italic">Infinite scroll</h1>
        </div>

        <div className="h-screen overflow-scroll" onScroll={handleScroll} >
          {/* Map all posts here */}
          {posts?.map((post) => (
             <div key={post._id} className="card shadow-sm bg-neutral text-accent-content mx-8 md:mx-36 lg:mx-80 mb-28">
<div className="flex my-3">
  
  <div className="self-center font-bold">{post.title}</div>
</div>

<div className="mx-4 my-3">
  <p>
    <span className="font-bold">{post.title}</span>
    <span className="ml-2 text-sm">{post.description}</span>
  </p>
</div>
</div>


          ))}
        </div>
        {isEnd && <p>End of posts</p>}
      </div>
    </div>
  );
};

export default Page;
