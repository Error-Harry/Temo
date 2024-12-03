import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CampaignSuccess.css";

const CampaignSuccess = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  // useEffect(() => {
  //   document.getElementById('charset').addEventListener('change', handleCharsetChange);
  //   // document.getElementById('customCharset').addEventListener('input', handleCustomCharsetChange);
  // }, []);

  // const handleCharsetChange = (e: any) => {
  //   const selectedCharset = e.target.value;
  // const displayCharacters = document.getElementById('displayCharacters');
  // const customCharsetInput = document.getElementById('customCharset');

  // switch (selectedCharset) {
  //   case 'Alphanumeric':
  //     displayCharacters.textContent = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //     break;
  //   case 'Alphabetic':
  //     displayCharacters.textContent = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  //     break;
  //   case 'Alphabetic Lowercase':
  //     displayCharacters.textContent = 'abcdefghijklmnopqrstuvwxyz';
  //     break;
  //   case 'Alphabetic Uppercase':
  //     displayCharacters.textContent = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //     break;
  //   case 'Numbers':
  //     displayCharacters.textContent = '0123456789';
  //     break;
  //   // case 'Custom':
  //   //   displayCharacters.textContent = customCharsetInput.value;
  //   //   break;
  //   default:
  //     displayCharacters.textContent = '';
  //     break;
  // }
  // };

  // const handleCustomCharsetChange = (e) => {
  //   if (document.getElementById('charset').value === 'Custom') {
  //     document.getElementById('displayCharacters').textContent = e.target.value;
  //   }
  // };

  const handleNextStep = () => {
    const fields = [
      { id: "programName", name: "Program Name" },
      // { id: "category", name: "Category" },
      { id: "description", name: "Description" },
      { id: "redemptionLimit", name: "Redemption Limit" },
      { id: "codeCount", name: "Code Count" },
      { id: "charset", name: "Charset" },
      { id: "codeLength", name: "Code Length" },
      { id: "pattern", name: "Pattern" },
      { id: "prefix", name: "Prefix" },
      { id: "postfix", name: "Postfix" },
    ];

    let hasError = false;
    let newErrors = {};

    fields.forEach((field) => {
      const fieldValue = document.getElementById(field.id).value;
      if (!fieldValue || (fieldValue.trim() === "" && fieldValue !== "0")) {
        newErrors[field.id] = `${field.name} is required`;
        hasError = true;
      }
    });

    setErrors(newErrors);

    if (!hasError) {
      const formData = {
        programName: document.getElementById("programName").value,
        // autoUpdate: document.getElementById("autoUpdate").checked,
        // category: document.getElementById("category").value,
        description: document.getElementById("description").value,
        redemptionLimit: document.getElementById("redemptionLimit").value,
        codeCount: document.getElementById("codeCount").value,
        charset: document.getElementById("charset").value,
        // customCharset: document.getElementById('customCharset').value,
        codeLength: document.getElementById("codeLength").value,
        pattern: document.getElementById("pattern").value,
        prefix: document.getElementById("prefix").value,
        postfix: document.getElementById("postfix").value,
      };

      console.log("Next step triggered with:", formData);
      navigate("/timeframe");
    }
  };

  const handleCreateCategory = () => {
    document.getElementById("createCategoryOverlay").style.display = "block";
  };

  const handleSaveCategory = () => {
    console.log("New category created:", {
      name: document.getElementById("newCategoryName").value,
      hierarchy: document.getElementById("newCategoryHierarchy").value,
    });
    document.getElementById("createCategoryOverlay").style.display = "none";
  };

  const handleCancelCategory = () => {
    document.getElementById("createCategoryOverlay").style.display = "none";
  };

  const handleNameChange = (event) => {
    console.log("namechange", event.target.value);
  };

  return (
    <div className="campaign-success-container">
      <div
        id="createCategoryOverlay"
        className="create-category-overlay"
        style={{ display: "none" }}
      >
        <div className="create-category-container">
          <h2>Create New Category</h2>
          <div className="form-group">
            <label>Category Name</label>
            <input
              type="text"
              id="newCategoryName"
              placeholder="Enter new category name"
            />
          </div>
          <div className="form-group">
            <label>Hierarchy</label>
            <input
              type="number"
              id="newCategoryHierarchy"
              placeholder="Enter hierarchy level"
              min="0"
            />
          </div>
          <div className="button-group">
            <button type="button" onClick={handleCancelCategory}>
              Cancel
            </button>
            <button type="button" onClick={handleSaveCategory}>
              Save
            </button>
          </div>
        </div>
      </div>

      <h1>Create Your Campaign</h1>

      <form>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            id="programName"
            placeholder="Enter program name"
            onChange={handleNameChange}
          />
          {errors?.programName && (
            <span className="error">{errors?.programName}</span>
          )}
        </div>

        {/* <div className="form-group">
          <label>
            <input type="checkbox" id="autoUpdate" />
            Auto Update
          </label>
          <div className="auto-update-box">
            <i className="bi bi-exclamation-circle help-icon"></i>
            <p>
              Auto update option will create a campaign that can be enhanced by new vouchers after the time of creation.
              This functionality is useful in case you publish multiple vouchers among customers and you want to ensure the number of available codes.
            </p>
          </div>
        </div> */}

        {/* <div className="form-group">
          <label>Profile</label>
          <div className="category-container">
            <select id="category">
              <option value="" disabled>
                Select a category
              </option>
              <option value="found">FOUND (3)</option>
              <option value="recent">RECENT (0)</option>
              <option value="selected">SELECTED (0)</option>
            </select>
            {errors?.category && (
              <span className="error">{errors?.category}</span>
            )}
            <button
              type="button"
              className="create-category-button"
              onClick={handleCreateCategory}
            >
              +
            </button>
          </div>
        </div> */}

        <div className="form-group">
          <label>Description</label>
          <textarea
            id="description"
            maxLength="150"
            placeholder="Description (0 / 150)"
          />
          {errors?.description && (
            <span className="error">{errors?.description}</span>
          )}
        </div>

        <div className="form-group">
          <label>Code Redemption Limit</label>
          <select id="redemptionLimit">
            <option value="1">1</option>
            <option value="unlimited">Unlimited</option>
          </select>
          {errors?.redemptionLimit && (
            <span className="error">{errors?.redemptionLimit}</span>
          )}
        </div>

        <div className="form-group">
          <label>Code Count</label>
          <input type="number" id="codeCount" min="1" />
          {errors?.codeCount && (
            <span className="error">{errors?.codeCount}</span>
          )}
        </div>

        <div className="form-group charset-group">
          <div className="charset-selector">
            <label>Charset</label>
            <select id="charset">
              <option value="Alphanumeric">Alphanumeric</option>
              <option value="Alphabetic">Alphabetic</option>
              <option value="Alphabetic Lowercase">Alphabetic Lowercase</option>
              <option value="Alphabetic Uppercase">Alphabetic Uppercase</option>
              <option value="Numbers">Numbers</option>
              <option value="Custom">Custom</option>
            </select>
            {errors?.charset && (
              <span className="error">{errors?.charset}</span>
            )}
          </div>

          {/* <div className="selected-charset-characters">
            <label>Selected Charset Characters: </label>
            <span id="displayCharacters"></span>
          </div> */}
        </div>

        <div className="form-group">
          <label>Code Length</label>
          <input type="number" id="codeLength" min="1" />
          {errors.codeLength && (
            <span className="error">{errors.codeLength}</span>
          )}
        </div>

        <div className="form-group">
          <label>Pattern</label>
          <input type="text" id="pattern" placeholder="#" />
          {errors.pattern && <span className="error">{errors.pattern}</span>}
        </div>

        <div className="form-group">
          <label>Prefix</label>
          <input type="text" id="prefix" placeholder="Enter prefix" />
          {errors.prefix && <span className="error">{errors.prefix}</span>}
        </div>

        <div className="form-group">
          <label>Postfix</label>
          <input type="text" id="postfix" placeholder="Enter postfix" />
          {errors.postfix && <span className="error">{errors.postfix}</span>}
        </div>
        <button type="button" onClick={handleNextStep}>
          Next
        </button>
      </form>
    </div>
  );
};

export { CampaignSuccess };
