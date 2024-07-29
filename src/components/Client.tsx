"use client";
import React, { useEffect, useState } from "react";

const Client = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted ? children : null;
};

export default Client;
