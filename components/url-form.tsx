"use client";
import { processUrl } from "@/lib/actions";
import { saveUrl } from "@/lib/data";
import React, { useState } from "react";

export const UrlForm = () => {
  const [url, setUrl] = useState("");

  async function save() {
    processUrl(url);
  }

  return (
    <form>
      <label htmlFor="url">Enter URL:</label>
      <input
        type="text"
        id="url"
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button onClick={save}>Submit</button>
    </form>
  );
};
