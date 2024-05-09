"use client";

import {
  useAddAlertMutation,
  useDropAlertMutation,
  useGetUserQuery,
} from "@/generated/graphql";
import { useParams } from "next/navigation";

const AddMutator = ({
  alert,
  evaluationId,
}: {
  alert: string;
  evaluationId: string;
}) => {
  const addMutator = useAddAlertMutation();
  return (
    <button
      onClick={() => {
        addMutator[0]({
          variables: {
            evaluationId,
            alert,
          },
        });
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Add {alert}
    </button>
  );
};

const DropMutator = ({
  alert,
  evaluationId,
}: {
  alert: string;
  evaluationId: string;
}) => {
  const dropMutator = useDropAlertMutation();
  return (
    <button
      onClick={() => {
        dropMutator[0]({
          variables: {
            evaluationId,
            alert,
          },
        });
      }}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Drop {alert}
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

  console.log(params, query);
  const user = query.data?.userById;
  return (
    <div>
      User: {user?.id}
      <div>
        {user?.evaluations?.map((e) => (
          <div key={e?.id}>
            Evaluation: {e?.id} Alerts: {JSON.stringify(e?.alerts)}
            <div className="flex flex-row gap-2">
              <DropMutator alert={"A"} evaluationId={e?.id!} />
              <AddMutator alert="A" evaluationId={e?.id!} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
