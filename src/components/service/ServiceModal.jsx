import Modal from "react-modal";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';



export default function ServiceModal({ isOpen, onToggle, description }) {

    const options = {
        renderNode: {
        //   [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        //     const { title, description } = node.data.target.fields;
        //     return <CustomComponent title={title} description={description} />
        //   },
          [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
            // find the asset in the assetBlockMap by ID
            // const asset = assetBlockMap.get(node.data.target.sys.id);
            const { file : { url } } = node.data.target.fields
            // render the asset accordingly
            return <img src={url} alt="coverImage" className="modal-cover-image" />;
          },
        }
      };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onToggle}
      contentLabel="My dialog"
      className="custom-modal"
      overlayClassName="custom-overlay"
      closeTimeoutMS={500}
    >
      <div className="beny_tm_modalbox_service">
        <button className="close-modal" onClick={onToggle}>
          <img src="/img/svg/cancel.svg" alt="close icon" />
        </button>
        {/* End close icon */}

        <div className="box_inner">
          <div className="description_wrap scrollable">
            {description && <div className="popup_informations">{documentToReactComponents(description, options)}</div>}
          </div>
        </div>
        {/* End box inner */}
      </div>
      {/* End modal box news */}
    </Modal>
  );
}
