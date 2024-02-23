import axios from "axios"

const instance = axios.create({
    baseURL:'https://apis.data.go.kr/1543061/abandonmentPublicSrvc',
    timeout:2000,
}) 

instance.interceptors.request.use(
    (config) => {
        // Modify the request config if needed
        return config;
      },
   (err)=>{
        console.log(err);
        return Promise.reject(err);
   }
)
instance.interceptors.response.use(
    (res)=>{
    // console.log(res)
     return res;
    },
    (err)=>{
        console.log(err);
        return Promise.reject(err);
    }
)


export const findApi = async (prefix)=>{
    const res = await instance.get(prefix)
    if(res.data){
        return res.data.response.body.items.item
    }
    return [];
}

// const onSelectSpecies = (code) => {
//     setSpecies(code);
//     const apikey = process.env.REACT_APP_API_KEY;
//     let url = 'https://apis.data.go.kr/1543061/abandonmentPublicSrvc/abandonmentPublic?'
//     url += 'serviceKey=' + apikey
//     url += `&bgnde=20240120&endde=20240220`
//     url += `&upkind=${code}&neuter_yn=U&pageNo=1&numOfRows=100&_type=json`
//     axios.get(url)
//       .then(res => {
//         if(res.data){
//           // console.log("data", res.data.response.body.items.item)
//           let tmp = res.data.response.body.items.item;
//           setPetObjList(tmp);
//           tmp = tmp.map((dog,idx)=><TailFindCard k={`${dog.desertionNo}dog${idx}`} theme='white' imgSrc={dog.popfile.replace("http","https")} title={dog.kindCd} subtitle={`${dog.age} ${dog.sexCd} ${dog.neuterYn}`} by={`${dog.orgNm}`}/>)
//           setPetCardList(tmp);
//         }
//         })
//   }

