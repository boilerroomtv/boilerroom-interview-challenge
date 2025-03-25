"use client";
import { ChangeEventHandler, FC, useCallback } from "react";
import styles from "./FilePicker.module.css";

type FilePickerProps = {
  onFileSelect: (file: File) => void;
};

export const FilePicker: FC<FilePickerProps> = ({ onFileSelect }) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const file = e.target.files?.[0];
      if (file) {
        onFileSelect(file);
      }
    },
    [onFileSelect],
  );

  return (
    <label className={styles.filePicker}>
      <input type="file" onChange={onChange} />
      Choose a file
    </label>
  );
};
