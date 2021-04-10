import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Context } from "../screens/context/BlogContext";
import BlogPostForm from "./components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate("Index"));
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
