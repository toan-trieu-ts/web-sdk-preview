<script>
  import { setKeys } from "@/store/keys";

  let keyName = "";
  let inputAccessKey = "";
  let inputSecretKey = "";
  let inputApiUrl = "";

  let keyInputVisible = false;

  const onImportStrClick = () => {
    keyInputVisible = !keyInputVisible;
  };

  const importKeys = (keys) => {
    let keyStr = "";
    if (keys?.inputType === "insertFromPaste") {
      keyStr = keys?.target?.value;
    }
    if (typeof keys === "string") keyStr = keys;
    if (!keyStr) return;

    const keyParsed = keyStr.split(",");

    keyName = keyParsed[0];
    inputApiUrl = keyParsed[1];
    inputAccessKey = keyParsed[2];
    inputSecretKey = keyParsed[3];

    setKeys({
      inputApiUrl,
      inputAccessKey,
      inputSecretKey,
    });

    keyInputVisible = !keyInputVisible;
  };
</script>

<button on:click={onImportStrClick}>IMPORT KEYS FROM STRING</button>
<br />
<br />
{#if keyInputVisible}<textarea
    cols="40"
    rows="5"
    id="key-input-string"
    on:input={importKeys}
  />{/if}
<div id="key-parse">
  {#if keyName !== ""}
    <span>Key Name: <i>{keyName}</i></span><br />
    <span id="api-url-value">Api Url: <i>{inputApiUrl}</i></span><br />
    <span id="access-key-value">Access Key: <i>{inputAccessKey}</i></span><br />
    <span id="secret-value">Secret Key: <i>{inputSecretKey}</i></span><br />
  {/if}
</div>
