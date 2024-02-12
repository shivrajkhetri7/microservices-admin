module.exports = {
  MESSAGES: {
    USERS: {
      USER_ID_REQUIRED: "User Id is required.",
      USER_LOGIN_SUCCESS: "User login successfully.",
      NOT_FOUND: "Sorry we could not find this user.",
      EMAIL_ALREADY_EXISTS: "A user with this email address already exists.",
      EMAIL_ALREADY_VERIFIED: "This email has already verified.",
      EMAIL_RESENT: "Email resent successfully.",
      USER_VERIFIED_SUCCESSFULLY: "User verified successfully.",
      FORGOT_PASSWORD_SENT_SUCCESS: "Forgot password email send successfully.",
      PASSWORD_UPDATED_SUCCESSFULLY: "Password updated successfully.",
      PASSWORD_UPDATED_FAILED: "Password update failed.",
      USER_ADDED: "User added successfully.",
      USER_UPDATED: "User updated successfully",
      FAILED_TO_UPDATE_USER: "Failed to update user.",
      FAILED_TO_CREATE_USER: "Failed to create user.",
    },
    AUTH: {
      INCORRECT_PASSWORD: "Password is incorrect.",
      NO_PERMISSION_AVAILABLE: "No permissions available.",
    },
    SIGNUP: {
      SIGNUP_COMPLETED: "signup successfully.",
      FAILED_TO_CREATE_SIGNUP: "Signup failed.",
      OTP_VERIFIED: "Valid Otp.",
      OTP_EXPIRED: "Otp has expired.",
      OTP_INCORRECT: "Incorrect otp.",
      EMAIL_SENT_SUCCESS: `OTP has been successfully sent to the email address: `,
      EMAIL_NOT_FOUND: "Email not found",
      DOMAIN_NAME_EXIST: "Domain name already exist.",
      DOMAIN_INVALID_CHARACTERS: "Invalid characters in Domain name",
      DOMAIN_VALID: "Valid domain",
    },
    ROLE: {
      ROLE_ID_REQUIRED: "Role Id Required.",
      ROLE_CREATED: "Role created successfully.",
      ROLE_UPDATED: "Role updated successfully.",
      FAILED_TO_CREATE_ROLE: "Failed to create Role.",
      FAILED_TO_UPDATE_ROLE: "Failed to update Role.",
      ROLE_NOT_FOUND: "No such role found",
      CANNOT_CREATE_PARENT_ROLE: "Invalid parent Role to create Role",
      ROLE_ALREADY_EXIST: "Role with display name already taken.",
    },
    GENERAL: {
      SOMETHING_WENT_WRONG: "Sorry, something went wrong.",
      VALIDATION_FAILED: "Request data is invalid.",
      USER_NOT_ACCESS_TO_CHANGE_STATUS:
        "You dont have permission to change the status.",
      VALID_LICENSE_NOT_EXIST: "Valid license does not exist.",
      STATUS_UPDATED: "Status updated successfully.",
      UNAUTHORIZED_ACCESS: "Unauthorized access",
      FAILED_TO_GET_DETAILS: "Failed to get details.",
      PERMISSION_UPDATED: "Permission Updated successfully.",
    },
    USER_TYPE: {
      USER_TYPE_CREATED: "User type created successfully",
      FAILED_TO_CREATE_USER_TYPE: "Failed to create user type",
      USER_TYPE_UPDATED: "User type updated successfully",
      FAILED_TO_UPDATE_USER_TYPE: "Failed to update user type",
      IS_DEFAULT: "default user_type canont be updated",
      USER_TYPE_DELETED: "deleted user type",
      FAILED_TO_DELETE_USER_TYPE: "Failed to delete usertype",
      NON_EXISTING_USER_TYPE: "User type invalid.",
      NO_USER_TYPE: "No user types available.",
    },
    S3: {
      FILE_UPLOADED: "File uploaded successfully.",
      FILE_UPLOAD_FAILED: "Failed to upload file",
      INVALID_CATEGORY: "Invalid file category.",
      INVALID_FILE_EXTENSION: "Invalid file extension.",
      FOLDER_ALREADY_EXIST: "Folder already exist.",
      INVALID_FOLDER_NAME: "Invalid folder name.",
    },
    SETTINGS: {
      UPDATE_SETTINGS: "Settings updated successfully.",
      UPDATE_FAILED: "Failed to update settings.",
    },
    ROLES: {
      ROLE_ALREADY_EXIST: "Role already exist.",
      USER_ROLE_INVALID: "Invalid user role.",
      ROLE_CODE_REQUIRED: "Role code is required.",
      ROLE_INVALID: "Invalid role code.",
    },
  },
  CODES: {
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    VALIDATION_FAILED: 400,
    NOT_FOUND: 404,
    CONFLICT: 409,
    SOMETHING_WENT_WRONG: 412,
    SUCCESS: 200,
    CREATED: 201,
    SUCCESS_WITHOUT_ENTITY: 204,
  },
  // admin roles if there are multiple admins
  ROLES: {
    SYSTEM: "super-admin",
    ADMIN: "admin",
  },
};