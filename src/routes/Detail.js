import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const GET_MOVIE = gql`
  ## for Apollo
  query getMovie($id: Int!) {
    ## GraphQL Query
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
    }
  }
`;

export default () => {
  const { id } = useParams(); // Param 으로 받아오는 인자값들은 모두 문자열이다. 따라서 Int를 받아와도 문자열로 저장 된다
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });
  if (loading) {
    return "Loading...";
  }
  if (data && data.movie) {
    return data.movie.title;
  }
};
