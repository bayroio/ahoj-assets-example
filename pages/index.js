// pages/index.js

import Layout from '../components/MyLayout';
import Link from 'next/link';
import { useForm } from "react-hook-form";

/*const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Index() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Next.js" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  );
}*/

export default function Index() {
  return (
    <Layout>
      <h1>Assets Platform</h1>
      <br /><hr /><br />
    </Layout>
  );
}