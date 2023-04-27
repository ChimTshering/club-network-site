import { getGroups } from "@/pages/api/group-api";
import { Group } from "@/types/feeds_type_model";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useCallback, useState } from "react";
import GroupCheckBoxInput from "../group-checkbox";
import GroupChip from "../group-chip";

const GroupModal = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [groupIds, setGroupIds] = useState<string[]>([]);
  const handleGroupSelect = useCallback(
    (groupId: string) => {
      if (groupIds.includes(groupId)) {
        setGroupIds((groups) => groups.filter((group) => group !== groupId));
      } else {
        setGroupIds((groups) => [...groups, groupId]);
      }
    },
    [groupIds]
  );
  const removeGrp = useCallback((id: string) => {
    setGroupIds((pre) => pre.filter((grpId) => grpId !== id));
  }, []);
  return (
    <div
      data-te-modal-init
      className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
      id="groupModal"
      tabIndex={-1}
      aria-labelledby="groupModal"
      aria-hidden="true"
    >
      <div
        data-te-modal-dialog-ref
        className="pointer-events-none relative h-[calc(100%-1rem)] w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]"
      >
        <div className="pointer-events-auto relative flex max-h-[100%] w-full flex-col overflow-hidden rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            <h5
              className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
              id="exampleModalScrollableLabel"
            >
              Select Group(s)
            </h5>
          </div>

          {/* <!--Modal body--> */}
          <div className="relative overflow-y-auto p-4">
            {groupIds.length?<p>Selected Group ( {groupIds.length} )</p>:null}
            <div className="flex flex-wrap">
              {data ? data.filter((group:Group)=>groupIds.includes(group.uuid)).map((grp: Group) => (
                <div key={grp.uuid}>
                  <GroupChip
                    group={grp}
                    handleRemove={() => removeGrp(grp.uuid)}
                  />
                </div>
              )):null}
            </div>
            {data ? (
              data.map((group: Group) => (
                <div key={group._id}>
                  <p>Groups({data.length ?? 0})</p>
                  <GroupCheckBoxInput
                    group={group}
                    isChecked={groupIds.includes(group.uuid)}
                    handleCheck={() => handleGroupSelect(group.uuid)}
                  />
                </div>
              ))
            ) : (
              <p className="text-red-600 p-4 border border-red-300 rounded">
                No group available
              </p>
            )}
          </div>

          {/* <!--Modal footer--> */}
          <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
            <button
              type="button"
              className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
              // data-te-modal-dismiss
              data-te-ripple-init
              data-te-ripple-color="light"
              data-te-toggle="modal"
              data-te-target="#createFeedModal"
            >
              Close
            </button>
            <button
              type="button"
              className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              data-te-toggle="modal"
              data-te-target="#createFeedModal"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const getServerSideProps: GetServerSideProps = async () => {
  const data = await getGroups(1);
  if (!data) {
    return {
      notFound: true,
    };
  } else {
    return { props: { data } };
  }
};
export default GroupModal;
