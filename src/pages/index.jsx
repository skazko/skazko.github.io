import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ProjectLink from '../components/ProjectLink';
import ProjectList from '../components/ProjectList';

export default (props) => {
  const {data: {allMarkdownRemark: {edges}}} = props;
  const Posts = edges
    .filter(edge => edge.node.frontmatter.type === 'project')
    .map(edge => <ProjectLink key={edge.node.id} post={edge.node} />);

  return (
    <Layout path={props.path}>
      <h2 style={{marginBottom: '1.75rem'}}>Мои последние работы</h2>
      <ProjectList>{Posts}</ProjectList>
    </Layout>
  )
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
      edges {
        node {
          id
          frontmatter {
            type
            date
            path
            title
            video {publicURL}
          }
        }
      }
    }
  }
`;
