"use client";

import {
  useAddAlertMutation,
  useDropAlertMutation,
  useGetUserQuery,
} from "@/generated/graphql";
import { useApolloClient } from "@apollo/client";
import { useParams } from "next/navigation";

const AddMutator = ({
  alertId,
  evaluationId,
}: {
  alertId: string;
  evaluationId: string;
}) => {
  const addMutator = useAddAlertMutation();
  return (
    <button
      onClick={() => {
        addMutator[0]({
          variables: {
            evaluationId,
            alertId,
          },
        });
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add {alertId}
    </button>
  );
};

const DropMutator = ({
  alertId,
  evaluationId,
}: {
  alertId: string;
  evaluationId: string;
}) => {
  const dropMutator = useDropAlertMutation();
  return (
    <button
      onClick={() => {
        dropMutator[0]({
          variables: {
            evaluationId,
            alertId,
          },
        });
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Drop {alertId}
    </button>
  );
};

export default function Page() {
  const params = useParams();
  const query = useGetUserQuery({
    variables: {
      id: params.id as string,
    },
  });
  const client = useApolloClient();
  console.log(client.cache);

  const user = query.data?.userById;
  return (
    <div>
      User: {user?.id}
      <div>
        {user?.evaluations?.map((e) => (
          <div key={e?.id}>
            Evaluation: {e?.id} Alerts: {JSON.stringify(e?.alerts)}
            <div className="flex flex-row gap-2">
              <DropMutator alertId={"A"} evaluationId={e?.id!} />
              <AddMutator alertId="A" evaluationId={e?.id!} />
            </div>
            <div className="flex flex-row gap-2">
              <DropMutator alertId={"B"} evaluationId={e?.id!} />
              <AddMutator alertId="B" evaluationId={e?.id!} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
