import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-sa-east-1.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_MASTER_URL_KEY +
  "/master";

const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getAllBussinesList = async() => {
  const query = gql`
    query BussinesList {
      businessLists {
        about
        adress
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
        name
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessByCategory= async(category)=>{
  const query = gql`
  query MyQuery {
    businessLists(where: {category: {name: "`+category+`"}}) {
      about
      adress
      category {
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }`;

  const result = await request(MASTER_URL, query);
  return result;
}

export default {
  getCategory,
  getAllBussinesList,
  getBusinessByCategory
};
