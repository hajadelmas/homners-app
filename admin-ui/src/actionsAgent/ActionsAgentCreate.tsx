import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ActionsAgentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateInput
          label="Date contre rendu rempli"
          source="dateContreRenduRempli"
        />
        <DateInput label="Date remontée annonce" source="dateRemontEAnnonce" />
        <DateInput label="Date visite" source="dateVisite" />
        <ReferenceInput source="user.id" reference="User" label="utilisateur">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
