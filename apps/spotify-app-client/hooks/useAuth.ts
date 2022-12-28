import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expriseIn, setExpriseIn] = useState();

  useEffect(() => {
    axios
      .post('http://localhost:3001/login', {
        code: code,
      })
      .then((res) => {
        console.log(res.data);
      });
    // .catch((err) => {
    //   window.location = '/' as unknown as Location;
    // });
  }, [code]);
}
