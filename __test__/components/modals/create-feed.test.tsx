import {fireEvent, getByRole, render,screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CreaFeedModal from '@/components/modals/create-feed-modal'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
describe('create feed modal render',()=>{
  beforeEach(()=>{
    render(
      <Provider store={store}>
        <CreaFeedModal />
      </Provider>
    );
  })
  it('textarea input for post description',()=>{
    const textareaInput = screen.getByTestId('textarea')
    expect(textareaInput).toBeTruthy()
    fireEvent.change(textareaInput,{target:{value:'input text'}})
    expect(textareaInput).toHaveValue("input text");

  }),
  it('image file upload',async ()=>{
    const handleUpload = jest.fn()
    let file = new File(["file content"], "image.png", {
      type: "text/plain",
    });
    const imageUploader = screen.getByTestId('image-upload')
    expect(imageUploader).toBeTruthy()
    fireEvent.change(imageUploader,{target:{value:{file:[file]}}})
  })
})