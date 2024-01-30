import React from "react";

import { Layout } from "../components/Layout";
import { CatsNotFound } from "../components/CatsNotFound";

export function PageNonFound() {
  return (
    <Layout>
      <CatsNotFound />
    </Layout>
  );
}
