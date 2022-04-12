import { useEffect, useState } from "react";
import { app, fs, path, dialog, http } from "@tauri-apps/api";
import Button from "@/components/Button";

function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    app.getName().then((appName) => {
      setName(appName);
    });
  }, []);

  const handleClick = () => {
    dialog
      .open({
        title: "Open file",
      })
      .then((result) => {
        console.log(result);
      });
    path.dataDir().then((fileEntry) => {
      console.log("dataDir", fileEntry);
    });
    path.downloadDir().then((fileEntry) => {
      console.log("downloadDir", fileEntry);
      fs.readTextFile(`${fileEntry}/test001.xlsx`).then((f) => {
        console.log(f);
      });
    });
  };

  const getListMenu = () => {
    http
      .fetch("", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        query: {
          project_id: "36",
          token:
            "93932a796399eb1944e06f917a0a1bdd43eee3d739c97c306781b4e6651377cd",
        },
      })
      .then((res) => {
        console.log(res);
      });
  };

  const getInterfaceData = () => {};

  return (
    <div>
      <Button onClick={handleClick}>读取文件</Button>
      <Button onClick={getListMenu}>获取接口菜单</Button>
      <Button onClick={getInterfaceData}>获取接口数据</Button>
    </div>
  );
}

export default Home;
