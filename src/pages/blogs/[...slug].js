import React from 'react';

// Server-side function to handle the request and prevent a 404
export async function getServerSideProps(context) {
  const { slug } = context.params;
  
  // Here you can handle different logic for the URL, but we return the slug
  return {
    props: {
      slug, // Passing the slug as a prop to the page
    },
  };
}

// The default React component to render
export default function CustomSlugPage({ slug }) {
  return (
    <></>
  ); 
}
