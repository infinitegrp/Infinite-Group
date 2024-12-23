import React, { useState } from "react";
import { Button, Grid, IconButton } from "@mui/material";
import Box from "components/Box";
import Input from "components/Input";
import PageLayout from "layouts/PageLayout";
import { useAddCareers } from "queries/ProductQuery";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Delete } from "@mui/icons-material";

const AddCareers = () => {
  const navigat = useNavigate();
  const [details, setDetails] = useState({
    dutiesAndResponsibilities: [""],
    workingConditions: [""],
    jobRequirements: [""],
  });
  const { mutateAsync: AddProduct, isLoading: loading } = useAddCareers();
  const handleChange = (e) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [disable, setDisable] = useState(false);
  const handleSubmit = () => {
    try {
      if (!details?.title) {
        return toast.error("Job title is required");
      }
      if (!details?.location) {
        return toast.error("Job location is required");
      }
      if (!details?.type) {
        return toast.error("Job type is required");
      }
      if (!details?.summary) {
        return toast.error("summary is required");
      }
      setDisable(true);
      const formData = new FormData();

      for (const key in details) {
        if (
          details.hasOwnProperty(key) &&
          key !== "workingConditions" &&
          key !== "jobRequirements" &&
          key !== "dutiesAndResponsibilities"
        ) {
          formData.append(key, details[key]);
        }
      }

      details?.dutiesAndResponsibilities?.forEach((fit) => {
        if (fit === "") {
        } else {
          return formData.append("dutiesAndResponsibilities", fit);
        }
      });
      details?.workingConditions?.forEach((feat) => {
        if (feat === "") {
        } else {
          return formData.append("workingConditions", feat);
        }
      });
      details?.jobRequirements?.forEach((jobRequirementsif) => {
        if (jobRequirementsif === "") {
        } else {
          return formData.append("jobRequirements", jobRequirementsif);
        }
      });

      AddProduct(formData)
        .then((res) => {
          toast.success(res?.message ?? "Careers added");
          setDisable(false);
          navigat("/careers");
        })
        .catch((err) => {
          toast.error(err?.message ?? "Something went wrong");
          setDisable(false);
        });
    } catch (error) {
      setDisable(false);
      console.error(error);
    }
  };

  const handleworkingConditionsChange = (index, value) => {
    const newworkingConditions = [...details.workingConditions];
    newworkingConditions[index] = value;
    setDetails((prevData) => ({ ...prevData, workingConditions: newworkingConditions }));
  };
  const handleAddworkingConditions = () => {
    setDetails((prevData) => ({
      ...prevData,
      workingConditions: [...prevData.workingConditions, ""],
    }));
  };
  const handleRemoveworkingConditions = (index) => {
    const newworkingConditions = details.workingConditions.filter((_, i) => i !== index);
    setDetails((prevData) => ({ ...prevData, workingConditions: newworkingConditions }));
  };

  const handledutiesAndResponsibilitiesChange = (index, value) => {
    const newworkingConditions = [...details.dutiesAndResponsibilities];
    newworkingConditions[index] = value;
    setDetails((prevData) => ({ ...prevData, dutiesAndResponsibilities: newworkingConditions }));
  };
  const handleAdddutiesAndResponsibilities = () => {
    setDetails((prevData) => ({
      ...prevData,
      dutiesAndResponsibilities: [...prevData.dutiesAndResponsibilities, ""],
    }));
  };
  const handleRemovedutiesAndResponsibilities = (index) => {
    const newworkingConditions = details.dutiesAndResponsibilities.filter((_, i) => i !== index);
    setDetails((prevData) => ({ ...prevData, dutiesAndResponsibilities: newworkingConditions }));
  };

  const handlejobRequirementsChange = (index, value) => {
    const newjobRequirements = [...details.jobRequirements];
    newjobRequirements[index] = value;
    setDetails((prevData) => ({ ...prevData, jobRequirements: newjobRequirements }));
  };
  const handleAddjobRequirements = () => {
    setDetails((prevData) => ({ ...prevData, jobRequirements: [...prevData.jobRequirements, ""] }));
  };
  const handleRemovejobRequirements = (index) => {
    const newjobRequirements = details.jobRequirements.filter((_, i) => i !== index);
    setDetails((prevData) => ({ ...prevData, jobRequirements: newjobRequirements }));
  };
  return (
    <PageLayout title={"Add Career"}>
      <Grid container spacing={5} display={"flex"} direction={"row"} p={8}>
        <Grid item container spacing={2} maxWidth={800} mx={"auto"} py={5}>
          <Grid item xs={12} sm={12} md={12}>
            <Input
              required
              placeholder="Job title"
              id="title"
              name="title"
              value={details?.title || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              placeholder="location"
              name="location"
              value={details?.location || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              required
              placeholder="Job type"
              id="type"
              name="type"
              value={details?.type || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              required
              placeholder="Pay Scale"
              id="pay"
              name="pay"
              value={details?.pay || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              required
              placeholder="LinkedIn Url"
              id="linkedin_url"
              name="linkedin_url"
              value={details?.linkedin_url || ""}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              id="summary"
              placeholder="Job summary"
              name="summary"
              value={details?.summary || ""}
              onChange={handleChange}
              multiline
              rows={5}
            />
          </Grid>
          <Grid item xs={12} display={"flex"} direction={"column"} gap={1}>
            {details?.dutiesAndResponsibilities?.map((dutiesAndResponsibilities, index) => (
              <Box key={index} display="flex" alignItems="center">
                <Input
                  placeholder={`Duties And Responsibilities ${index + 1}`}
                  value={dutiesAndResponsibilities}
                  onChange={(e) => handledutiesAndResponsibilitiesChange(index, e.target.value)}
                  fullWidth
                  required
                />
                {details.dutiesAndResponsibilities.length > 1 && (
                  <IconButton onClick={() => handleRemovedutiesAndResponsibilities(index)}>
                    <Delete />
                  </IconButton>
                )}
              </Box>
            ))}
            <Button
              onClick={handleAdddutiesAndResponsibilities}
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4"
            >
              Duties And Responsibilities
            </Button>
          </Grid>

          <Grid item xs={12} display={"flex"} direction={"column"} gap={1}>
            {details?.workingConditions?.map((workingConditions, index) => (
              <Box key={index} display="flex" alignItems="center">
                <Input
                  placeholder={`Working Condition ${index + 1}`}
                  value={workingConditions}
                  onChange={(e) => handleworkingConditionsChange(index, e.target.value)}
                  fullWidth
                  required
                />
                {details.workingConditions.length > 1 && (
                  <IconButton onClick={() => handleRemoveworkingConditions(index)}>
                    <Delete />
                  </IconButton>
                )}
              </Box>
            ))}
            <Button
              onClick={handleAddworkingConditions}
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4"
            >
              Add Working Conditions
            </Button>
          </Grid>

          <Grid item xs={12} display={"flex"} direction={"column"} gap={1}>
            {details?.jobRequirements?.map((jobRequirements, index) => (
              <Box key={index} display="flex" alignItems="center">
                <Input
                  placeholder={`Job Requirement ${index + 1}`}
                  value={jobRequirements}
                  onChange={(e) => handlejobRequirementsChange(index, e.target.value)}
                  fullWidth
                  required
                />
                {details.jobRequirements.length > 1 && (
                  <IconButton onClick={() => handleRemovejobRequirements(index)}>
                    <Delete />
                  </IconButton>
                )}
              </Box>
            ))}
            <Button
              onClick={handleAddjobRequirements}
              variant="contained"
              color="primary"
              fullWidth
              className="mt-4"
            >
              Add Job Requirements
            </Button>
          </Grid>
          <Grid item xs={12} sm={4} mt={4}>
            <Button
              sx={{ mr: 0, width: "100%" }}
              onClick={handleSubmit}
              disabled={disable}
              variant="contained"
            >
              Add Career
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={2} xs={12} sm={12} md={6} py={5}></Grid>
      </Grid>
    </PageLayout>
  );
};

export default AddCareers;
