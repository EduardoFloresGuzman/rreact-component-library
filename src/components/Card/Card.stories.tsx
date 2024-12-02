import React from "react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
};

export const Default = () => <Card title="Default Title" />;
export const WithSubtitle = () => (
  <Card title="Title with Subtitle" subtitle="This is a subtitle" />
);
