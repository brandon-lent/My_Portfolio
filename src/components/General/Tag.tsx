import React from "react";

interface TagProps {
  tags: string;
}

export const Tag: React.FC<TagProps> = ({ tags }) => {
  const tagArray = tags.split(" ");

  return (
    <section className="tag">
      {tagArray.map(tag => (
        <p className={tag} key={tag}>
          {tag}
        </p>
      ))}
    </section>
  );
};
